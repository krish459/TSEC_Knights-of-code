import os
from twilio.rest import Client
from twilio.base.exceptions import TwilioRestException
from decouple import config

client = Client(config('TWILIO_ACCOUNT_SID'), config('TWILIO_AUTH_TOKEN'))
verify = client.verify.services(config('TWILIO_VERIFY_SERVICE_SID'))


def send(phone):
    verify.verifications.create(to='+919082230267', channel='sms')
    # print(verification.sid)

def check(phone, code):
    try:
        result = verify.verification_checks.create(to=phone, code=code)
    except TwilioRestException:
        print('no')
        return False
    return result.status == 'approved'