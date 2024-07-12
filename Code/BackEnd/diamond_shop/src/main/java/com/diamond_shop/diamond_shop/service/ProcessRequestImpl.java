package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.dto.ReceivePendingRequestDTO;
import com.diamond_shop.diamond_shop.dto.UpdateProcessRequestDTO;
import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PendingRequestsEntity;
import com.diamond_shop.diamond_shop.entity.ProcessRequestEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PendingRepository;
import com.diamond_shop.diamond_shop.repository.ProcessRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProcessRequestImpl implements ProcessRequestService {

    private final ProcessRequestRepository processRequestRepository;
    private final AccountRepository accountRepository;
    private final PendingRepository pendingRepository;
    private final ValuationResultService valuationResultService;
    private final ProcessResultService processResultService;

    @Override
    public int totalDone() {
        return processRequestRepository.totalDone();
    }

    @Override
    public Page<ProcessRequestEntity> viewAllProcessRequests(int page) {
        int pageSize = 5;
        int pageNumber = --page;
        return processRequestRepository.findAllProcessResults(PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public Page<ProcessRequestEntity> viewProcessRequestsByConsultingStaffId(int page, int consultingStaff) {
        int pageSize = 5;
        int pageNumber = --page;
        return processRequestRepository.findProcessRequestsByConsultingStaffId(PageRequest.of(pageNumber, pageSize), consultingStaff);
    }

    @Override
    public Page<ProcessRequestEntity> viewProcessRequestsByCustomerId(int page, int customerId) {
        int pageSize = 5;
        int pageNumber = --page;
        return processRequestRepository.findProcessRequestsByCustomerId(PageRequest.of(pageNumber, pageSize), customerId);
    }

    @Override
    public String createProcessRequest(ReceivePendingRequestDTO receivePendingRequestDTO) {
        AccountEntity consultingStaff = accountRepository.findById(receivePendingRequestDTO.getConsultingStaffId()).orElse(null);
        if (consultingStaff == null)
            return "Cannot found this consulting staff with id: " + receivePendingRequestDTO.getConsultingStaffId();
        PendingRequestsEntity pendingRequest = pendingRepository.findById(receivePendingRequestDTO.getPendingRequestId()).orElse(null);
        if (pendingRequest == null)
            return "Cannot found pending request with id: " + receivePendingRequestDTO.getPendingRequestId();

        ProcessRequestEntity processRequest = processRequestRepository.findByPendingRequestId(pendingRequest.getId());
        if (processRequest == null) {
            processRequest = new ProcessRequestEntity(
                    consultingStaff,
                    pendingRequest,
                    "Not resolved yet");
            processRequestRepository.save(processRequest);
            return "Task assigned successfully!";
        } else return "Have already received !";
    }

    @Override
    public String updateProcessRequest(int id, UpdateProcessRequestDTO updateProcessRequestDTO) {
        ProcessRequestEntity processRequest = processRequestRepository.findById(id).orElse(null);
        if (processRequest == null)
            return "Cannot found this process request with id: " + id;
        switch (updateProcessRequestDTO.getStatus()) {
            case "Contacted", "Done" -> {
                processRequest.setStatus(updateProcessRequestDTO.getStatus());
                processRequestRepository.save(processRequest);
            }
            case "Diamond Received" -> {
                valuationResultService.createValuationResult(processRequest);
                processResultService.processResult(processRequest);
                processRequest.setStatus(updateProcessRequestDTO.getStatus());
                processRequestRepository.save(processRequest);
            }
            case "Lost Receipt" -> {

            }
        }
        return "Update process request successfully!";
    }
}
