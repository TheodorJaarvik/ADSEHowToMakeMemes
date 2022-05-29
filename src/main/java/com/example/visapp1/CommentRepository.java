package com.example.visapp1;

import org.springframework.stereotype.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@Repository
public class CommentRepository {

    @Autowired
    private JdbcTemplate db;

    public void addComment(Comment comment){
        try {
            db.update("insert into MYTABLE(field1,title,score,id,url,comms_num,created,body,timestamp)" +
                            "values(?, ?, ?, ?, ?,?,?,?,?)",
                    comment.getField1(),comment.getTitle(),comment.getScore(),comment.getId(),
                    comment.getUrl(),comment.getCommnr(),comment.getCreated(),comment.getBody(),comment.getTime()
            );
        } catch (Exception e) {
            System.out.println("Noe gikk galt i repo sin addBilett");
        }
    }

    public List<Comment> getComment(){
        try {
            return db.query("SELECT * FROM MYTABLE WHERE SCORE > 100 ORDER BY RAND() LIMIT 1", new BeanPropertyRowMapper<>(Comment.class));
        } catch (Exception e) {
            System.out.println("Noe gikk galt i repo sin getBiletter");
            return null;
        }
    }

    public List<Comment> getComment2(){
        try {
            return db.query("SELECT * FROM MYTABLE WHERE FIELD1 < 50 ORDER BY FIELD1 ASC", new BeanPropertyRowMapper<>(Comment.class));
        } catch (Exception e) {
            System.out.println("Noe gikk galt i repo sin getBiletter");
            return null;
        }
    }

    public List<Comment> getComment3(){
        try {
            return db.query("SELECT * FROM MYTABLE WHERE FIELD1 <= 998 ORDER BY FIELD1 DESC LIMIT 50", new BeanPropertyRowMapper<>(Comment.class));
        } catch (Exception e) {
            System.out.println("Noe gikk galt i repo sin getBiletter");
            return null;
        }
    }
}
