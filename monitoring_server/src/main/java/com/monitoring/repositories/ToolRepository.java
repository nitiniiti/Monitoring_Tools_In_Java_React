package com.monitoring.repositories;

import com.monitoring.models.Tools;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToolRepository extends JpaRepository<Tools, Long> {

}