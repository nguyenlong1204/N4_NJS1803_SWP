package com.diamond_shop.diamond_shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.diamond_shop.diamond_shop.entity.AccountEntity;
import com.diamond_shop.diamond_shop.repository.AccountRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AccountEntity accountEntity = accountRepository.findByUserName(username);                
        return UserDetailsImpl.build(accountEntity);
    }
}
