package com.monitoring.controllers;

import java.util.List;
import com.monitoring.models.Tools;
import com.monitoring.repositories.ToolRepository;

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
@RequestMapping("/api/v1/tools")
public class toolControlller {

    @Autowired
    private ToolRepository toolRepository;

    @GetMapping
    public List<Tools> getTools() {
        return toolRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Tools getTool(@PathVariable Long id) {
        return toolRepository.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Tools create(@RequestBody final Tools tool) {
        return toolRepository.saveAndFlush(tool);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) {
        toolRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Tools update(@PathVariable Long id, @RequestBody Tools tool) {
        Tools existingtool = toolRepository.getOne(id);
        BeanUtils.copyProperties(tool, existingtool, "id");
        return toolRepository.saveAndFlush(existingtool);
    }

}