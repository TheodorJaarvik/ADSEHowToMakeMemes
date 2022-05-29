package com.example.visapp1;

public class Comment {

        private int field1;
        private String title;
        private int score;
        private String id;
        private String url;
        private int commnr;
        private int created;
        private String body;
        private String time;

    public Comment(int field1, String title, int score, String id, String url, int commnr, int created, String body, String time) {
        this.field1 = field1;
        this.title = title;
        this.score = score;
        this.id = id;
        this.url = url;
        this.commnr = commnr;
        this.created = created;
        this.body = body;
        this.time = time;
    }
    public Comment(){}


    public int getField1() {
        return field1;
    }

    public void setField1(int field1) {
        this.field1 = field1;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getCommnr() {
        return commnr;
    }

    public void setCommnr(int commnr) {
        this.commnr = commnr;
    }

    public int getCreated() {
        return created;
    }

    public void setCreated(int created) {
        this.created = created;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}

