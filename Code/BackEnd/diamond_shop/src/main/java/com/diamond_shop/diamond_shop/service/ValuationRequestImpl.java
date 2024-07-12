package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.*;
import com.diamond_shop.diamond_shop.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ValuationRequestImpl implements ValuationRequestService {
    private final PendingRepository pendingRepository;
    private final PaymentRepository paymentRepository;
    private final ServiceRepository serviceRepository;
    private final ValuationRequestRepository valuationRequestRepository;
    private final ProcessRequestRepository processRequestRepository;


    @Override
    public String makeRequest(int pendingId, int serviceId, int paymentId) {

        PendingRequestsEntity pending = pendingRepository.findById(pendingId).orElse(null);
        ServiceEntity service = serviceRepository.findById(serviceId).orElse(null);
        PaymentEntity payment = paymentRepository.findById(paymentId).orElse(null);

        if (pending == null)
            return "Pending not found";
        else if (service == null)
            return "Service not found";
        else if (payment == null)
            return "payment not found";

        Date createdDate = new Date();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(createdDate);
        calendar.add(Calendar.DAY_OF_MONTH, service.getTime());
        Date finishedDate = calendar.getTime();
        calendar.add(Calendar.DAY_OF_MONTH, 30);
        Date sealingDate = calendar.getTime();
        ValuationRequestEntity valuationRequestEntity = new ValuationRequestEntity(
                pending,
                service,
                payment,
                createdDate,
                finishedDate,
                sealingDate
        );
        valuationRequestRepository.save(valuationRequestEntity);
        return "Create successfully";
    }

    @Override
    public Optional<ValuationRequestEntity> getValuationRequestByPendingRequestId(int pendingId) {
        return valuationRequestRepository.findByPendingRequestId(pendingId);
    }

    @Override
    public String checkFinishDateByProcessRequestId(int processRequestId) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findByProcessRequestId(processRequestId);
        if (valuationRequest.isEmpty())
            return "Valuation request not found";
        Date currentDate = new Date();
        if (currentDate.after(valuationRequest.get().getFinishDate())) {
            Optional<ProcessRequestEntity> processRequest = processRequestRepository.findById(processRequestId);
            if (processRequest.isEmpty())
                return "Process request not found";
            if (!processRequest.get().getStatus().equals("Finished")
                    && !processRequest.get().getStatus().equals("Done")
                    && !processRequest.get().getStatus().equals("Sealed")) {
                processRequest.get().setStatus("Finished");
                processRequestRepository.save(processRequest.get());
                return "Finished request";
            } else return "Already finished request";
        } else return "Not finish";
    }

    @Override
    public String checkSealedDateByProcessRequestId(int processRequestId) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findByProcessRequestId(processRequestId);
        if (valuationRequest.isEmpty())
            return "Valuation request not found";

        Date currentDate = new Date();
        if (currentDate.after(valuationRequest.get().getSealingDate())) {
            Optional<ProcessRequestEntity> processRequest = processRequestRepository.findById(processRequestId);
            if (processRequest.isEmpty())
                return "Process request not found";
            if (!processRequest.get().getStatus().equals("Sealed")
                    && !processRequest.get().getStatus().equals("Finished")
                    && !processRequest.get().getStatus().equals("Done")) {
                processRequest.get().setStatus("Sealed");
                processRequestRepository.save(processRequest.get());
                return "Sealed request";
            } else return "Already sealed request";
        } else return "Not get sealed date yet";
    }
}   