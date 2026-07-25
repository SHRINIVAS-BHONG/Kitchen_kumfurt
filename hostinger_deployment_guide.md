# 🚀 The Ultimate Baby-Step Guide: Deploying to Hostinger

This guide will walk you through exactly how to take your finished Next.js website and put it on the internet using Hostinger's ₹69/mo "Single Web Hosting" plan.

Follow these steps exactly, one by one. Take your time!

---

## Phase 1: Preparing Your Code on Your Computer

Before we upload anything to the internet, we have to translate your Next.js code into plain, simple HTML files that Hostinger understands.

**Step 1: Open Your Terminal**
Open your project folder (`Kitchen_kumfurt`) in VS Code and open the terminal at the bottom.

**Step 2: Run the Build Command**
Type this exact command and press Enter:
```bash
npm run build
```

**Step 3: Wait for the Magic**
You will see some text scrolling by. Wait until it says **"Compiled successfully"**. 

**Step 4: Find the "out" Folder**
Look at the list of files on the left side of your VS Code. You will now see a new folder named `out`. 
> [!NOTE]
> This `out` folder contains the **final, ready-to-upload** version of your website. You do **not** upload the whole `Kitchen_kumfurt` folder. You only care about what is *inside* the `out` folder.

**Step 5: Create a ZIP File**
1. Right-click the `out` folder in VS Code and choose **"Reveal in File Explorer"** (Windows) or "Reveal in Finder" (Mac).
2. Open the `out` folder.
3. Select **ALL** the files and folders inside it.
4. Right-click the selected files and choose **"Compress to ZIP file"** (or "Send to > Compressed (zipped) folder").
5. Name this zip file `website.zip`. Put it somewhere easy to find, like your Desktop.

---

## Phase 2: Uploading to Hostinger

Now we take your `website.zip` and put it on your Hostinger server.

**Step 1: Log into Hostinger**
Log into your Hostinger account (hPanel).

**Step 2: Go to File Manager**
1. Click on **Websites** at the top.
2. Find your domain name and click **Manage**.
3. On the left menu, search for **File Manager** and click it.

**Step 3: Open the `public_html` Folder**
> [!IMPORTANT]
> When File Manager opens, you will see a folder called `public_html`. **This is the public face of your website.** Anything inside this folder can be seen by the entire world. Double-click to open it.

**Step 4: Delete the Default File**
Inside `public_html`, you might see a file named `default.php` or `index.php` created by Hostinger. **Delete it.** Your `public_html` folder should be completely empty.

**Step 5: Upload Your ZIP File**
1. Click the **Upload** icon (usually at the top right, looks like a cloud with an up arrow).
2. Choose **File** and select your `website.zip` from your Desktop.
3. Wait for it to finish uploading.

**Step 6: Extract the ZIP File**
1. Right-click `website.zip` in the File Manager.
2. Select **Extract**.
3. It will ask for a folder name. Just type a dot `.` or leave it blank to extract them directly into `public_html`.
4. Once extracted, you should see `index.html`, `_next`, etc., inside `public_html`. 
5. You can now delete `website.zip` from Hostinger to save space.

🎉 **CONGRATULATIONS! Your website is live!** Go type your domain name into your browser and look at your masterpiece!

---

## 🚨 Troubleshooting: Problems That Might Happen

Here is exactly how to fix the most common problems you will face.

### Problem 1: "I go to my website and I see a blank white screen!"
**Why it happens:** Sometimes, older browsers or strict server settings block the JavaScript that makes Next.js run.
**How to fix:** 
Double check that you didn't accidentally put the `out` folder *inside* `public_html`. 
The structure should be `public_html / index.html`. 
It should NOT be `public_html / out / index.html`.

### Problem 2: "When I click 'About', it works. But if I refresh the About page, I get a 404 Error!"
> [!WARNING]
> **This is the #1 most common issue with Next.js static exports on Hostinger!**

**Why it happens:** When you go to `yourdomain.com/about`, Hostinger's server looks for a folder named `about`. But Next.js actually created a file named `about.html`. 
**How to fix:** We have to tell Hostinger to look for `.html` files automatically.
1. Go back into your Hostinger **File Manager** (`public_html`).
2. Click **New File** (the icon with a plus sign).
3. Name the file exactly this (don't forget the dot at the beginning!): `.htaccess`
4. Open the `.htaccess` file and paste this exact code:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{DOCUMENT_ROOT}/$1.html -f
RewriteRule ^(.*)$ $1.html [L]
```
5. Click **Save**. Your pages will now refresh perfectly!

### Problem 3: "I uploaded new changes, but my website still looks like the old version!"
**Why it happens:** Your web browser (like Chrome) is trying to be fast, so it saved a copy of your old website in its memory (called a "Cache").
**How to fix:** 
1. Open your website.
2. Hold down `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac). This forces the browser to download the brand new version.
3. If it still shows the old version, go to Hostinger's Dashboard, search for **Cache**, and click "Purge Everything".

### Problem 4: "My images are missing or broken!"
**Why it happens:** Next.js tries to be smart and change your image paths. 
**How to fix:** We already fixed this! By adding `unoptimized: true` to your `next.config.mjs` earlier, we guaranteed your images will work perfectly on Hostinger. Just ensure your images are inside the `public` folder in your VS Code before you run `npm run build`.
