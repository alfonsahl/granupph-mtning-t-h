# Email-bekräftelse Setup

Detta projekt använder Supabase Edge Functions och Resend för att skicka bekräftelsemail till kunder när de bokar granupphämtning.

## Steg 1: Skapa Resend-konto

1. Gå till [Resend.com](https://resend.com) och skapa ett konto
2. Verifiera din domän eller använd Resend's testdomän
3. Skapa en API-nyckel i Resend Dashboard
4. Spara API-nyckeln - du behöver den senare

## Steg 2: Konfigurera Supabase Edge Function

1. Installera Supabase CLI om du inte redan har det:
   ```bash
   npm install -g supabase
   ```

2. Logga in på Supabase:
   ```bash
   supabase login
   ```

3. Länka ditt projekt:
   ```bash
   supabase link --project-ref ditt-project-ref
   ```

4. Sätt environment variables för Edge Function:
   ```bash
   supabase secrets set RESEND_API_KEY=din_resend_api_key
   supabase secrets set FROM_EMAIL=noreply@din-domän.com
   ```

5. Deploya Edge Function:
   ```bash
   supabase functions deploy send-booking-confirmation
   ```

## Steg 3: Kör databasmigrationer

1. Kör migrationerna i Supabase SQL Editor eller via CLI:
   ```bash
   supabase db push
   ```

   Eller kopiera innehållet från:
   - `supabase/migrations/20250101000001_add_email_to_bookings.sql`
   - `supabase/migrations/20250101000002_create_email_trigger.sql`

## Steg 4: Testa

1. Fyll i formuläret på webbplatsen
2. Ett bekräftelsemail ska skickas automatiskt till den angivna e-postadressen

## Alternativ: Anropa Edge Function direkt från frontend

Om du föredrar att anropa Edge Function direkt från frontend istället för via database trigger, kan du uppdatera `BookingForm.tsx`:

```typescript
// Efter att bokningen är sparad i databasen:
const { data: functionData, error: functionError } = await supabase.functions.invoke(
  'send-booking-confirmation',
  {
    body: {
      id: bookingId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      pickup_date: data.pickupDate,
      time_preference: data.timePreference,
      additional_info: data.additionalInfo,
    },
  }
);
```

## Felsökning

- Kontrollera att Resend API-nyckeln är korrekt konfigurerad
- Kontrollera att FROM_EMAIL är en verifierad domän i Resend
- Kontrollera Supabase Edge Function logs för felmeddelanden
- Se till att email-kolumnen finns i bookings-tabellen

