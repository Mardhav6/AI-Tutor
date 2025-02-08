/*
  # Initial Schema Setup

  1. Tables
    - users (handled by Supabase Auth)
    - courses
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - image_url (text)
      - created_at (timestamp)
    - goals
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - title (text)
      - deadline (date)
      - completed (boolean)
      - created_at (timestamp)
    - progress
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - course_id (uuid, foreign key)
      - progress (integer)
      - last_updated (timestamp)
    - chat_history
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - message (text)
      - role (text)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Courses Table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Goals Table
CREATE TABLE goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  title text NOT NULL,
  deadline date NOT NULL,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Progress Table
CREATE TABLE progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  course_id uuid REFERENCES courses NOT NULL,
  progress integer DEFAULT 0,
  last_updated timestamptz DEFAULT now()
);

-- Chat History Table
CREATE TABLE chat_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  message text NOT NULL,
  role text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view courses"
  ON courses FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can manage their own goals"
  ON goals FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own progress"
  ON progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their chat history"
  ON chat_history FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);