/*
  # Create contacts table with safe policy creation

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `company` (text)
      - `message` (text, required)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting contacts (if not exists)
*/

-- Create contacts table if it doesn't exist
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Safely create the policy if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contacts' 
    AND policyname = 'Anyone can insert contacts'
  ) THEN
    CREATE POLICY "Anyone can insert contacts"
      ON contacts
      FOR INSERT
      TO anon
      WITH CHECK (true);
  END IF;
END $$;