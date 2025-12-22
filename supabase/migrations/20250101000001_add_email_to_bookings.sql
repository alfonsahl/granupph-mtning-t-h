-- Add email column to bookings table
ALTER TABLE public.bookings
ADD COLUMN IF NOT EXISTS email TEXT NOT NULL;

-- Create index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_bookings_email ON public.bookings(email);

