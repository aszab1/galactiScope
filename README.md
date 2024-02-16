

![image 91](https://github.com/aszab1/galactiScope/assets/145586216/a960eae8-8fce-4480-8871-530634cc04a3)



## ReadMe GalacticScope


**Description**

GalacticScope is a web application that displays images from the NASA API. It was created as a paired programming project in 2 days. 

**Deployment link**

The project was deployed on Netlify, link is below. 

[https://galacticscope.netlify.app/](https://galacticscope.netlify.app/)

**Getting Started/Code Installation**

To run the app locally:



* Clone the repo from GitHub
* Install dependencies with `npm install`
* Start the dev server with `npm start`

Or click on the deployment link above.

**Timeframe & Working Team (Solo/Pair/Group)**

The timeframe set out for this project was 2 days including planning, the first half of the first day was dedicated to planning and the project started shortly after sign off.

I  worked with Nyasha Dzvoti on this project. His GitHub repo is [https://github.com/NyashaDZT/apod-api-project-2](https://github.com/NyashaDZT/apod-api-project-2)

**Technologies Used**



* React
* React Bootstrap
* Sass

**Brief**

The brief was to build a React application that:



* Consumes a public API 
* Have several components 
* The app can have a router 
* Be deployed online and accessible to the public 

**Planning**

We began planning by researching publicly available API’s to find one that aligned with our interests. This search led us to discover NASA’s APOD (Astronomy Picture of the Day) API. This API, hosted on the NASA-maintained website, showcases a unique astronomy-related picture of the day, along with relevant details such as the picture’s description, the photographer’s name. It is designed to handle HTTP requests and provides data corresponding to specific called endpoints, which perfectly matched our project requirements.   

The homepage prominently displays the picture of the day along with its description. It also includes a navbar that contains a modal, from which users can access a random assortment of pictures. Additionally, the NASA logo in the navbar doubles as a button to return to the homepage:



![pnr6vjfV_kPFyAw61MI8dMjy5o7SEtk_cZOguJ0uxK3nxhBrfK1xUuGti2__dQ8LUuJPkB_pFbS1laL4fWtko1Lt7XaT4IK3P-PvFd5d5k4i43bgJYkZj-xSCGYRq--15cupP-DBEpTlUEHpzQpNS-g](https://github.com/aszab1/galactiScope/assets/145586216/4d9abfc8-e883-42d6-ab08-b737166bd975)



Image Gallery: 


<img width="788" alt="o76X8FpaCU5F0vuiP9a5FFEMie0GNAvFNqaR1ejJmlF-lNWxAkdmLyycR4e4lf9BP6cEYo80yiWjbGyeC4U7BmqWEhkQogwEmiBJjVjK-mAcO5Be1V_Qlf7TEyrZMJSBRIckZAgZ4z-96nSlkPEvpsI" src="https://github.com/aszab1/galactiScope/assets/145586216/1e7305c9-4a1b-4c59-918c-8df282b71410">



**Build/Code Process**

The project was paircoded, utilising the  “Live Share” extension in Visual Studio Code. This collaborative method involved working together on nearly every aspect of the code. Our process typically began with selecting a specific component to develop, followed by creating its basic structure. We then discussed implementing the desired functionality. For instance, our initial focus was on the Navbar component, which we identified as an ideal starting point. It provided a convenient way to navigate the site during development, eliminating the need to manually input endpoints in the address bar. This also allowed us to define our endpoints early in the project and set up the React Router accordingly. Below, you'll find a screenshot of the Navbar component:



<img width="709" alt="xQuEYifcxr32ZogbP0bgvlygzuGhOKbKulwIVaUsEk_7AyCMwbL8V02K-MwRhdTkeZYybQiu5dDQ6-N8qmYkc3J1xQZ0hxMqNof-tCBAklrS92bgLcq6s_q8UvG79XZn22z_od_b3cMA_XoD5KPvECo" src="https://github.com/aszab1/galactiScope/assets/145586216/3e3bbb2a-acd7-4e35-8cf1-0a62a5e40a19">


Then continued with the rest of the home page, by creating a Card for the Picture of the day with React Bootstrap;




<img width="645" alt="L83D6hJlMRQj5gfibQYUogw8-KjczYn1IeFkAIO4fGGISGujovIqpF3KDK9oLym6cowbxLB9lPB8Q_SUQTzRkCOaTVSyehK567K3K2gOapNDQkjUrVtqOo9tyvqZTZyJShnBbm4Cs4VC8PuLuKM51k4" src="https://github.com/aszab1/galactiScope/assets/145586216/8a460716-e9c2-49cb-ad7b-b2f58ae7792e">


We then moved onto building the Image Gallery component, using useEffect to fetch 20 random images from the API to display per page. We added Next and Previous buttons to paginate through the images.


![KTv09RtRb_vaP0JXfTUPNsgVN_wJjkWhHJRAN-m2_-6_uuGhuGgtBLMmH5kcmZScmINnrTx2mDjWhZQ9Myi9YKjvir8JNDFaTWrm-LHPHPPA1qXc135U0nvNOtcuGhTGbgTFe6u0sebsPqVSh_Kiioc](https://github.com/aszab1/galactiScope/assets/145586216/fdfbfe1b-4fc9-4466-886a-bdecea0565ca)



Used Bootstrap Container / Row / Col  to display the images.




<img width="536" alt="nuBPjSxkv4SCKqZzvQMTeImdpVhWgrPw2zqXB0t-5AL5zjcsR4xLXbWg8I4_7KxZhNNu698ZvqqYnx3tqWMo2tEgeH5v7bRC4Zips4LD_PQA2hkDuTyKVXP4KXYCYVWmm5MjI_PXEb89j_MAzgcaga4" src="https://github.com/aszab1/galactiScope/assets/145586216/40ec7176-464e-4e0e-bfe8-6b4fa86142fa">


When an individual picture is clicked, it directs to a separate page with a Bootstrap Card displaying the full image.

**Challenges**

Challenges included getting the pagination buttons working properly. The Previous button currently does not work as intended.

**Bugs**

The previous button is generating a new random picture as opposed to saving the previous pages so that is something I will fix in the future. 

**Wins**

Overall, it was great working collaboratively to build this app within a short timeframe. Successfully using React for the first time to develop an efficient component architecture was a significant achievement. Similarly, effectively employing Bootstrap for styling and integrating an external API were key successes of this project.

There are still some bugs to fix but we managed to get an MVP deployed.

**Future Improvements**



* Fix pagination buttons
* Implement responsive design
* Add loading states
* Fix the way project handles video data, this can be achieved by calling and making sure that the data received corresponds to a picture or by manually adding a video player so that videos can play
