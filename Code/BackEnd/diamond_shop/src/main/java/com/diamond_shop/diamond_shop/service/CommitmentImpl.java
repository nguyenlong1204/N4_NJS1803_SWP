package com.diamond_shop.diamond_shop.service;

import com.diamond_shop.diamond_shop.entity.CommitmentLetterEntity;
import com.diamond_shop.diamond_shop.entity.ValuationRequestEntity;
import com.diamond_shop.diamond_shop.repository.CommitmentRepository;
import com.diamond_shop.diamond_shop.repository.ValuationRequestRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class CommitmentImpl implements CommitmentService {

    private final ValuationRequestRepository valuationRequestRepository;
    private final CommitmentRepository commitmentRepository;

    public CommitmentImpl(ValuationRequestRepository valuationRequestRepository, CommitmentRepository commitmentRepository) {
        this.valuationRequestRepository = valuationRequestRepository;
        this.commitmentRepository = commitmentRepository;
    }

    @Override
    public Page<CommitmentLetterEntity> findAll(int page) {
        int pageSize = 5, pageNumber = --page;
        return commitmentRepository.findAll(PageRequest.of(pageNumber, pageSize));
    }

    @Override
    public Page<CommitmentLetterEntity> findAllByCustomerId(int page, int customerId) {
        int pageSize = 5, pageNumber = --page;
        return commitmentRepository.findAllByCustomerId(PageRequest.of(pageNumber, pageSize), customerId);
    }

    @Override
    public String createCommitmentByValuationRequestId(int valuationRequestId) {
        Optional<ValuationRequestEntity> valuationRequest = valuationRequestRepository.findById(valuationRequestId);
        if (valuationRequest.isEmpty())
            return "Cannot find valuation request";
        if (commitmentRepository.findByValuationRequestId(valuationRequestId).isPresent())
            return "Commitment already exists";
        CommitmentLetterEntity commitmentLetter = new CommitmentLetterEntity("", new Date(), valuationRequest.get());
        commitmentRepository.save(commitmentLetter);
        return "Create commitment successful";
    }
}
