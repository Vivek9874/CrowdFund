// UserRepository.java
package com.summerterm.crowdfund_backend.repository;

import com.summerterm.crowdfund_backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Optional: Add custom query methods if needed
}
