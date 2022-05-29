package com.example.visapp1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class VisApp1Controller {

    @Autowired
    CommentRepository repo;

    @PostMapping("/api")
    public void add(Comment comment) {
        repo.addComment(comment);
    }

    @GetMapping("/api/comments")
    public List<Comment> getAll() {
        return repo.getComment();
    }

    @GetMapping("/api/comments2")
    public List<Comment> getAll2() {
        return repo.getComment2();
    }

    @GetMapping("/api/comments3")
    public List<Comment> getAll3() {
        return repo.getComment3();
    }
}
