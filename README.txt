A2_B00919242
-PLANNING.pdf.      
-Reseach.pdf          
-Prototype.pdf        
-Index.html           
-Favicon.png    
-Code_Review
-Style.css
-Design
+-Books               
+-Career              
+-Contact           

-----------------------------------------------------------------------------------------------------
CSS selectors used location, line number(Different from Assignment 1)- 

Universal Selector- 

-line 1-3 in Style.css and ..../A2_B00919242/Form/FormStyle.css

* {
    box-sizing: border-box;
}



Multiple Selector- 

-line 66 to 73 in Style.css

table, th, td{
    border: 1px solid black;
    text-align: center;
    align-content: center;
    padding: 10px;
    margin-left: auto;
    margin-right: auto;
}


Child Selector-

-line 54 to 60 in Style.css

div > p{
    text-align: justify;
    font-size: larger;
    line-height: 35px;
    padding-left: 25px;
    padding-right: 15px;
}


Sibling Selector-

-line 24-26 in ../A2_B00919242/Books/Books.css

h1~p{
  border: 3px solid black;
}


Adjacent Sibling Selector-

Line 5-7 in ../A2_B00919242/Form/FormStyle.css

h1+p{
    font-weight: bold;
}


Attribute Selector 

line 34- 41 in ../A2_B00919242/Form/FormStyle.css

input[type="submit"]{
    
    background-color: rgb(86, 152, 86);
    color: white;
    padding: 12px 20px;
    font-size: large;
    width: 100%;
}

line 43- 45 in ../A2_B00919242/Form/FormStyle.css

input[type="submit"]:hover{
    background-color: rgba(160, 248, 8, 0.663);
}

Pseudo-element Selector

line 13- 15 in ../A2_B00919242/Books/Books.css


p::first-letter{
  color: rgb(108, 170, 70);
}


-----------------------------------------------------------------------------------------------------

index.html-

Line 5- <link rel="icon" type="image/x-icon" href="favicon.png" target="_blank"> is used to have favicon for the index.html page
target="_blank" opens the hyperlink in new window/tab.
line 9-11 <header> Harshil Varia </header> is used to create header with my name as the content.
line 12-16 creates a navigation bar with 3 webpages- Career.html, Books.html and Contact.html. (<a href="">clickME</a> tag is used to create a hyperlink with clickMe as the hyperlink.)
<section></section> tag is used to divede the webpage's body into different section containing different topics.
line 29-35 is an ordered list of Aims.
line 39-44 is an ordered list of Actions.
<br> tag is used to create a break.
line 48-60 is table with captions "Progress" and 3 cols of HTML , CSS and JAVA SCRIPT as the table header. 
&nbsp; is used to create a blank space


+-Career
-Career.html
-Apple_logo.png(asset)
-career_logo.jpeg(asset)
-Google_logo_png(asset)
-CareerStyle.css
-Inside Apple's $5 Billion Headquaters.mp4(asset)

line 5 is used to create facicon for the webpage career.
line 14-32 is an ordered list of companies I am interested to work in. 
line 16-21 and line 26-31 are nested unordered list of reasons why these companies inspire me to work with them/for them.
line 15 and 25 has company logo beside the name of the company.(used <img> tag)
line 21 uses <video src="" controls width=""> which uses relative path of downloaded video of apple infrastructure.
line 30 uses <a href=""></a> to link an external youtube video of google.

+-Books
-Books.html
-Books.css
-Book_fav_icon.png
-do_it_today.jpeg
-The art of thinking clearly.jpeg
-Rise of the machines a cybernetic history.m4b

line 5 used for fav icon for webpage Books.html.
line 13-15 contains list of books. line 13-14 uses <img src="" alt="" width=""> tag to display image with alternate name and specific size.
also each line contains <a href=""></a> tag to have purchase link of the book.
line 15 has <audio src="" controls width=""> tag to have audio book available for users.

+-Contact
-Contact.html
-ContactStyle.css
-contact_fav_icon.png
-Gmail_logo.png
-Img_3937.jpeg
-Instagram_logo.svg
-Linkedin_logo.png

line 5 contains <link rel="" href=""> tag for facicon of webpage contact.html.
line 12 has <img src="" alt="ME"> tag which displays my picture.
line 16-18 contains links to social media and mail. 
<a href="mailto:example@gmail.com" target="_blank"><img src="" alt="gmail_logo" width=""></a> is used to use gmail_log as a link to mail example@gmail.com.



(all the links, images, and icons are same as the previous assignment just added css files to each webpage)

Refrences- 
Coffee icon graphic design template vector image on VectorStock Retrieved February 8, 2023
    from https://www.nngroup.com/articles/ten-usability-heuristics/

Apple  Retrieved February 8, 2023
    from https://www.apple.com/ca/

Money cash logo vector stock vector. Illustration of bank - 91037524  Retrieved February 8, 2023
    from https://www.dreamstime.com/stock-illustration-money-cash-logo-vector-green-image91037524


File:Google "G" Logo.png Retrieved February 8, 2023
    from https://commons.wikimedia.org/wiki/File:Google_%22G%22_Logo.svg

Inside Apple's $5 Billion Headquarters Retrieved February 8, 2023
    from https://www.youtube.com/watch?v=T9dJ_cE5Asw

Book Icon Clipart Transparent Background, Book Icon, Book Icons, Book Clipart, Black PNG Image For Free Download: Book icons, Vector art, Icon Retrieved February 8, 2023
    from https://www.pinterest.com/pin/793055815626806098/

Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things eBook : Foroux, Darius: Amazon.ca: Kindle Store  Retrieved February 8, 2023
    from https://www.amazon.ca/Do-Today-Procrastination-Productivity-Meaningful-ebook/dp/B07DRP1Q5W

The Art of Thinking Clearly: Dobelli, Rolf: 9780062219695: Books February 8, 2023
    from The Art of Thinking Clearly: Dobelli, Rolf: 9780062219695: Books - Amazon.ca

Rise-of-the-Machines-Audiobook Retrieved February 8, 2023
    from https://www.audible.ca/pd/Rise-of-the-Machines-Audiobook/B072871ZX7?qid=1675902570&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=b278ed0a-c3b2-4491-808c-7cb2190a487c&pf_rd_r=ETZC7V6YCJTBGCQSWYBY&pageLoadId=HIHXWF6Fwoa06fVw&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c

Address book Computer Icons Font Awesome, contact icon, text, logo png Retrieved February 8, 2023
    from https://www.pngegg.com/en/png-pjwhw

Gmail - Email by Google  Retrieved February 8, 2023
    from https://www.google.com/search?q=gmail&rlz=1C1GCEU_enCA1044CA1044&tbm=isch&source=iu&ictx=1&vet=1&fir=PKm1ZvExQjI7zM%252CvMxQKELbMD2fAM%252C%252Fm%252F02q_bk&usg=AI4_-kSu8HRZpzH_JqBzO_HzIK2cFtYt6A&sa=X&ved=2ahUKEwiHl9jFmIf9AhUmFVkFHVj0CZgQ_B16BAhEEAI#imgrc=PKm1ZvExQjI7zM

Instagram - Wikipedia Retrieved February 8, 2023
     from https://www.google.com/search?q=instagram&rlz=1C1GCEU_enCA1044CA1044&tbm=isch&source=iu&ictx=1&vet=1&fir=vDxmQJXFChdErM%252CQPFtXn7VaJY67M%252C%252Fm%252F0glpjll%253BwOSZD5wSdkKyuM%252CdoURgri3bgSwtM%252C_%253Bm8JMMxx0jKJGJM%252CwEGerGTz4SfaOM%252C_%253BFDD1-cwfJBEIxM%252CjyVaQgPI1EgD5M%252C_%253Beo7ew-IHHcRajM%252CWRZu51hDTgkguM%252C_%253BP2F1M7CUFEHvhM%252C7hj7jh4Agw2JmM%252C_&usg=AI4_-kT3_8VJONM6Gwh9EdC1WCCfXntLDA&sa=X&ved=2ahUKEwiRvYn3mIf9AhUiFlkFHbf1C1EQ_B16BAhREAE#imgrc=BBFdrFhGYw9j9M

LinkedIn: Jobs & Business News Retrieved February 8, 2023
     from https://www.google.com/search?q=linkedin&rlz=1C1GCEU_enCA1044CA1044&tbm=isch&source=iu&ictx=1&vet=1&fir=MHDQAYMmWnQ4IM%252CLo1_YQtViwbQvM%252C%252Fm%252F0w03805&usg=AI4_-kRU81iwhUbwu7wigw6fsHMI0FQTuA&sa=X&ved=2ahUKEwiX6pagmYf9AhWSFFkFHRNPBXEQ_B16BAhHEAI#imgrc=f084GhCClOHCNM