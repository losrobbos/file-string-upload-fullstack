# file-string-upload-fullstack

Find here a code demo on how to upload a file from a frontend to a backend.

The demo realizes the steps from this file upload guide:
https://github.com/losrobbos/file-upload-guide/

Important background info:
Most free providers for deploying your backend code do NOT allow you to store files there! At maximum they just allow temporary storage, 
but will delete your files at some point.

So even though your backend code to store a file on your disk might work for you when running your backend on your PC, 
it will very likely NOT work when you upload your backend code to a free provider, e.g. Vercel and try to upload a file to there.

Therefore we use here a technique how to just upload the file to the backend, but not STORING it there.

Instead we will just FORWARD the file to file cloud provider (Cloudinary). The file upload just takes one line of code! 

With that technique you can deploy your backend to any free provider. It should work anywhere.

Enjoy your upload, my friend :)
