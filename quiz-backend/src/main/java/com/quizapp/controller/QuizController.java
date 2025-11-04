package com.quizapp.controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.quizapp.repository.QuestionRepository;
import com.quizapp.model.Question;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class QuizController {
    @Autowired private QuestionRepository questionRepo;
    @GetMapping("/questions/{level}")
    public List<Question> getQuestionsByLevel(@PathVariable int level) {
        return questionRepo.findAll();
    }
}