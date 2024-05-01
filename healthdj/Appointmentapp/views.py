from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
from django.core.mail import send_mail
from django.http import JsonResponse

def send_email(request):
    if request.method == 'POST':
        patient_name = request.POST.get('patient_name')
        guardian_name = request.POST.get('guardian_name')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        preferred_date = request.POST.get('preferred_date')
        preferred_doctor = request.POST.get('preferred_doctor')
        message = request.POST.get('message')

        # Construct the email message
        email_message = f'''
        Patient's Name: {patient_name}
        Guardian Name: {guardian_name}
        Phone: {phone}
        Email: {email}
        Preferred Date: {preferred_date}
        Preferred Doctor: {preferred_doctor}
        Message/Health Issue: {message}
        '''

        try:
            # Send email
            send_mail(
                'New Appointment Booking',
                email_message,
                'pavantalwar58@gmail.com',  # Sender's email
                ['gonganllamadhu018@gmail.com'],  # Receiver's email
                fail_silently=False,
            )
            return JsonResponse({'message': 'Email sent successfully'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


