from playsound import playsound
import speech_recognition as sr
import pyaudio
import openai
import gtts
import os

r = sr.Recognizer()

with sr.Microphone() as source:
    print("Diga alguma coisa:")
    audio = r.listen(source)

    try:   
        print("Você disse: " + r.recognize_google(audio, language='pt-BR'))
        frase = r.recognize_google(audio, language='pt-BR')
        
        openai.api_key = "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"

        completion = openai.Completion.create(
            engine="text-davinci-003",
            prompt=frase,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.5,
            )

        response = completion.choices[0].text
        print(response)
        
    except sr.UnknownValueError:
        print("Não entendi o que você disse")
        response = "Não entendi o que você disse"
        
    except sr.RequestError as e:
        print("Não foi possível realizar a requisição; {0}".format(e))
        response = "Não foi possível realizar a requisição"

frase = gtts.gTTS(response,lang='pt-br')  
#frase.save('frase.mp3')
#playsound('frase.mp3')
