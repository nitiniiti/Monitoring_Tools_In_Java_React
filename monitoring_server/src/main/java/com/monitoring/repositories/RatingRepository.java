package com.monitoring.repositories;

import com.monitoring.models.Ratings;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RatingRepository extends JpaRepository<Ratings, Long> {

    @Query("select r from ratings r where r.tool_id = :#{#tool_id}")
    Ratings findRatingByToolId(Long tool_id);

}
