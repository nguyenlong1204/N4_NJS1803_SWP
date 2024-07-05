package com.diamond_shop.diamond_shop.service;

import java.util.List;

import com.diamond_shop.diamond_shop.pojo.VNpayBillPojo;

public interface PaymentService {
   int createPayment(
      int userid, 
      String created_date, 
      String bank, 
      String amount, 
      String transactionNo,
      String orderInfo
   );
   List<VNpayBillPojo> getTransaction(int id);
}
