package com.diamond_shop.diamond_shop.service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.stream.Collectors;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import jakarta.servlet.http.HttpServletRequest;


public class VNPayService {
    private static final String HMAC_SHA512 = "HmacSHA512";

    public static String generateSecureHash(String secretKey, Map<String, String> params) {
        try {
            String hashData = params.entrySet()
                    .stream()
                    .sorted(Map.Entry.comparingByKey())
                    .map(e -> e.getKey() + "=" + URLEncoder.encode(e.getValue(), StandardCharsets.US_ASCII))
                    .collect(Collectors.joining("&"));

            Mac hmacSHA512 = Mac.getInstance(HMAC_SHA512);
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), HMAC_SHA512);
            hmacSHA512.init(secretKeySpec);

            byte[] hashBytes = hmacSHA512.doFinal(hashData.getBytes());
            return bytesToHex(hashBytes);
        } catch (Exception e) {
            throw new RuntimeException("Error while generating secure hash", e);
        }
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder hexString = new StringBuilder();
        for (byte b : bytes) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString().toUpperCase();
    }

    public static String createQueryString(Map<String, String> params) {
        return params.entrySet()
                .stream()
                .sorted(Map.Entry.comparingByKey())
                .map(entry -> {
                    try {
                        return URLEncoder.encode(entry.getKey(), StandardCharsets.US_ASCII.toString()) + "=" +
                                URLEncoder.encode(entry.getValue(), StandardCharsets.US_ASCII.toString());
                    } catch (Exception e) {
                        throw new RuntimeException("Error while encoding URL parameters", e);
                    }
                })
                .collect(Collectors.joining("&"));
    }

    public static boolean verifySecureHash(String secretKey, Map<String, String> params) {
        try {
            // Loại bỏ vnp_SecureHash khỏi params trước khi tính toán hash
            String receivedHash = params.remove("vnp_SecureHash");
    
            String hashData = params.entrySet()
                    .stream()
                    .sorted(Map.Entry.comparingByKey())
                    .map(e -> e.getKey() + "=" + URLEncoder.encode(e.getValue(), StandardCharsets.US_ASCII))
                    .collect(Collectors.joining("&"));
    
            Mac hmacSHA512 = Mac.getInstance(HMAC_SHA512);
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(), HMAC_SHA512);
            hmacSHA512.init(secretKeySpec);
    
            byte[] hashBytes = hmacSHA512.doFinal(hashData.getBytes());
            String calculatedHash = bytesToHex(hashBytes);
    
            return calculatedHash.equals(receivedHash);
        } catch (Exception e) {
            throw new RuntimeException("Error while verifying secure hash", e);
        }
    }
    public static String getClientIpAddress(HttpServletRequest request) {
        String remoteAddr = "";

        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || remoteAddr.isEmpty()) {
                remoteAddr = request.getRemoteAddr();
            }
        }

        return remoteAddr;
    }
}
