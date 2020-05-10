package com.monitoring.controllers;

import com.monitoring.repositories.RatingRepository;

import java.util.List;

import com.monitoring.models.Ratings;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/ratings")
public class ratingsController {

    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping
    public List<Ratings> getRatings() {
        return ratingRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{tool_id}")
    public Ratings getRatings(@PathVariable Long tool_id) {
        return ratingRepository.findRatingByToolId(tool_id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Ratings create(@RequestBody final Ratings rating) {
        return ratingRepository.saveAndFlush(rating);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        ratingRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Ratings update(@PathVariable Long id, @RequestBody Ratings rating) {
        Ratings existingRating = ratingRepository.getOne(id);
        BeanUtils.copyProperties(rating, existingRating, "id");
        return ratingRepository.saveAndFlush(existingRating);
    }

}