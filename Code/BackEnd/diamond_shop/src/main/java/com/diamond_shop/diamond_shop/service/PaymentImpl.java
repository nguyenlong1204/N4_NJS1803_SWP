package com.diamond_shop.diamond_shop.service;


import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.entity.PaymentEntity;
import com.diamond_shop.diamond_shop.pojo.VNpayBillPojo;
import com.diamond_shop.diamond_shop.repository.AccountRepository;
import com.diamond_shop.diamond_shop.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PaymentImpl implements PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private AccountRepository accountRepository;

    public PaymentImpl(PaymentRepository paymentRepository, AccountRepository accountRepository) {
        this.paymentRepository = paymentRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    public int createPayment(int userid,
                             String created_date,
                             String bank,
                             String amount,
                             String transactionNo,
                             String orderInfo) {

        AccountEntity accountEntity = accountRepository.findById(userid).orElse(null);

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
        Date createdDate = null;
        try {
            createdDate = dateFormat.parse(created_date);
        } catch (ParseException e) {
            System.out.println(e.getMessage());
        }
        int amountInt = Integer.parseInt(amount) / 100;

        if (accountEntity == null) {
            throw new IllegalArgumentException("User not found with id: " + userid);
        }

        PaymentEntity paymentEntity = new PaymentEntity(
                accountEntity,
                createdDate,
                bank,
                amountInt,
                transactionNo,
                orderInfo
        );

        paymentRepository.save(paymentEntity);
        return paymentEntity.getId();
    }

    @Override
    public List<VNpayBillPojo> getTransaction(int id) {
        List<VNpayBillPojo> result = new ArrayList<>();
        List<PaymentEntity> paymentEntities = paymentRepository.findByCustomerId(id);

        for (PaymentEntity entity : paymentEntities) {
            VNpayBillPojo pojo = new VNpayBillPojo();
            pojo.setCustomername(entity.getCustomerId().getFullname());
            pojo.setDate(entity.getCreatedDate());
            pojo.setBank(entity.getBank());
            pojo.setAmount(entity.getAmount());
            pojo.setTransaction(entity.getTransaction());
            pojo.setOrder_info(entity.getOrderInfo());
            result.add(pojo);
        }
        return result;
    }

    @Override
    public int getIncome() {
        int total = 0;
        List<Integer> allPaymentAmount = paymentRepository.getIncome();
        for (Integer amount : allPaymentAmount) {
            total += amount;
        }
        return total;
    }
}
