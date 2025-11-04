package com.quizapp.model;
import jakarta.persistence.*;

@Entity
@Table(name = "questions")
public class Question {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "TEXT")
    private String text;
    private String optionA, optionB, optionC, optionD;
    private String correctOption;
    private Integer level = 1;
}