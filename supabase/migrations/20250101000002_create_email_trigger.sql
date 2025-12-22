-- Optional: Create function to call the edge function when a booking is created
-- Note: This requires the pg_net extension and proper configuration
-- Alternatively, you can call the edge function directly from the frontend (recommended)

-- Enable pg_net extension if not already enabled
-- CREATE EXTENSION IF NOT EXISTS pg_net;

-- Uncomment below if you want to use database triggers instead of calling from frontend
/*
CREATE OR REPLACE FUNCTION public.send_booking_confirmation_email()
RETURNS TRIGGER AS $$
DECLARE
  edge_function_url TEXT;
  service_role_key TEXT;
BEGIN
  -- Get configuration from environment or settings
  edge_function_url := current_setting('app.settings.edge_function_url', true);
  service_role_key := current_setting('app.settings.service_role_key', true);
  
  -- Call the edge function via HTTP
  PERFORM
    net.http_post(
      url := edge_function_url || '/send-booking-confirmation',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_role_key
      ),
      body := jsonb_build_object(
        'id', NEW.id,
        'name', NEW.name,
        'email', NEW.email,
        'phone', NEW.phone,
        'address', NEW.address,
        'pickup_date', NEW.pickup_date,
        'time_preference', NEW.time_preference,
        'additional_info', NEW.additional_info
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to send email when booking is created
CREATE TRIGGER trigger_send_booking_confirmation_email
  AFTER INSERT ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.send_booking_confirmation_email();
*/

