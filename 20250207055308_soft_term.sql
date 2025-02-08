/*
  # Seed Courses Data

  This migration adds initial course data to the courses table.
*/

INSERT INTO courses (title, description, image_url) VALUES
('Python Programming Fundamentals', 
 'Learn Python programming from scratch. Cover basic syntax, data structures, and algorithms.',
 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800'),

('Web Development Bootcamp',
 'Comprehensive web development course covering HTML, CSS, JavaScript, and React.',
 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&q=80&w=800'),

('Data Science Essentials',
 'Introduction to data science using Python, pandas, and scikit-learn.',
 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800'),

('Machine Learning Basics',
 'Learn fundamental concepts of machine learning and AI.',
 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800');