package com.diamond_shop.diamond_shop.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.AddressException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Autowired
    private JavaMailSender mailSender;
    @Value("${app.frontend_url}")
    String frontend_url;
    @Value("${app.backend_url}")
    String backend_url;

    public void sendActivationEmail(String email, String activationCode, String name) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(email);
            helper.setSubject("Account Activation!");

            String htmlMsg = "<h3>Hi, " + name + "</h3>"
                    + "<p>Please click the following link to activate your account:</p>"
                    + "<button style=\"display: flex;\r\n" +
                    "justify-content: center;\r\n" +
                    "align-items: center;\r\n" +
                    "padding: 10px 20px;\r\n" +
                    "cursor: pointer; background: #3498db; border: transparent; border-radius: 8px; \">"
                    + "<a href=\"" + backend_url + "/api/account/activate?code=" + activationCode + "\" style=\"display:block; text-decoration: none; color: #fff\">"
                    + "Activate Account"
                    + "</a>"
                    + "</button>";
            helper.setText(htmlMsg, true);
        } catch (MessagingException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to send email");
        }
        mailSender.send(mimeMessage);
    }

    public void sendAccountForAdmin(String email, String activationCode, String name, String username, String password) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(email);
            helper.setSubject("Account Activation!");

            String htmlMsg = "<h3>Hi, " + name + "</h3>"
                    + "<h4>Welcome to our website:</h4>"
                    + "<p>This is your account to login 👇</p>"
                    + "<p>username: <strong>" + username + "</strong></p>"
                    + "<p>password: <strong>" + password + "</strong></p>";
            helper.setText(htmlMsg, true);
        } catch (MessagingException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to send email");
        }
        mailSender.send(mimeMessage);
    }

    public void sendResetTokenEmail(String to, String token, String name) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(to);
            helper.setSubject("Reset Password");
            String htmlMsg = "<h3>Hi, " + name + "</h3>"
                    + "<p>To reset your password, click the button below:</p>"
                    + "<button style=\"display: flex;\r\n" + //
                    "justify-content: center;\r\n" + //
                    "align-items: center;\r\n" + //
                    "padding: 10px 20px;\r\n" + //
                    "cursor: pointer; background: #3498db; border: transparent; border-radius: 8px; \">"
                    + "<a href=\"" + backend_url + "/api/account/reset-password?token=" + token + "\" style=\"display:block; text-decoration: none; color: #fff\">"
                    + "Activate Account"
                    + "</a>"
                    + "</button>";
            helper.setText(htmlMsg, true);
        } catch (MessagingException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to send email");
        }
        mailSender.send(mimeMessage);
    }

    public void sendForgetTokenEmail(String to, String token, String name) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            helper.setTo(to);
            helper.setSubject("Reset Password");
            String htmlMsg = "<h3>Hi, " + name + "</h3>"
                    + "<p>To reset your password, click the button below:</p>"
                    + "<button style=\"display: flex;\r\n" + //
                    "justify-content: center;\r\n" + //
                    "align-items: center;\r\n" + //
                    "padding: 10px 20px;\r\n" + //
                    "cursor: pointer; background: #3498db; border: transparent; border-radius: 8px; \">"
                    + "<a href=\"" + frontend_url + "/reset-forget-password?token=" + token + "\" style=\"display:block; text-decoration: none; color: #fff\">"
                    + "Activate Account"
                    + "</a>"
                    + "</button>";
            helper.setText(htmlMsg, true);
        } catch (MessagingException e) {
            e.printStackTrace();
            throw new RuntimeException("Failed to send email");
        }
        mailSender.send(mimeMessage);
    }
    public boolean isEmailValid(String email) {
        boolean result = true;
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            emailAddr.validate();
        } catch (AddressException ex) {
            result = false;
        }
        return result;
    }
}
