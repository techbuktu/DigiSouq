Objective
------------
I created this project as a 'proof-of-concept' Digital Marketplace (the 'Souq' in the name is the Arabic for 'a marketplace'.) 

### Intended Functionality
* Users can create accounts and login
* In-app authentication is done using TokenAuthentication. So, the moment a new user signs up, an auth token is created for him/her. They use this token to make API calls in the React.js app.
* There are **three** primary types of users: Admin, Seller, Buyer
* The Admin user is able to login to the Django-based backend admin app (at localhost:8000/admin using **"muhammad"** and **"Jalloh1234"** as their username and password credentials.) From here, the Admin/Superuser can add/update/delete/view new users, buyers, sellers, products, etc.
*  A *Seller* is able to add *Products* to be bid on by other users.
* A *Buyer* is able to view the list of *Products* available for sale. He/she can bid on a selected product.
* A *Seller* is able to view the list of bids (if any) for each of his products and can choose to accept the bid or not.
* A *Buyer* can view a list of products he has bid on and whether his bid on a product has been accepted or not.

## Dev and Design Decisions
### Backend Development
* I decided to build the backend using [Django 2.2](https://docs.djangoproject.com/en/2.2/)

* The REST API (and the token-based authentication) were built using the [Django REST Framework](https://www.django-rest-framework.org/).

* The [django-cors-headers](https://github.com/adamchainz/django-cors-headers) package is used to configure CORS defaults for the API (inside the settings.main module).

* I split the backend **digisouq.settings** module into a package and created a settings file for each of the dev and prod environments (while the leaving the shared configurations inside the settings.main module). These are inside the **digisouq** directory. 

### Frontend Development
I decided to develop the frontend app for DigSouq using ReactJS instead of Angular (mostly because I wanted to compare this to my other Angular-based SPAs).

I also used `axios` (instead of Fetch ) for making API calls against the backend REST API endpoints on `localhost:8000/api`.

I applied some modularity to the structure of the frontend (`digi-souq/src/`) app.
* All the components are inside a `components` folder. I further split the components into 'types'  and placed them inside the appropriate `auth`, `buyers`, `layout` and `sellers` sub-folders.

* I put all the API Services inside the `src/api` directory. I created a BaseApi module with a custom `axios` object that contains the needed headers and authentication token that are need for most CRUD requests on the API. All other API Services import and use this custom `axios` object (except on a few occasions.)

* Every API Service is created as a class in its own file. Each individual API class would have a `static` method to handle each type of CRUD functionality (including filtered requests.)

* Routing is implemented using the popular `[react-router-dom]`(https://www.npmjs.com/package/react-router-dom)

* No consideration is given to styling in the frontend. But you can easily install and use either `reactstrap` or `Material Design Lite` to handle the RWD needs and make the app a bit more attractive than the current barebones UI.

Installations
-------------
### Backend Dependencies/Packages
#### Create a virtualenv for Python 3
1. Head over to the terminal and run:
```bash
virtualenv -p python3 env_name 

```
Replace `env_name` wih the actual name you want to give your Python virtual environment.

2. Activate the virtualenv
```bash 
source env_name/bin/activate
```
Your Python virtualenv should now be ready to use. 

3. Next, let's install the Python packages (Django and others) inside the `requirements/dev.txt` file.

```bash
pip install -r requirements/dev.txt
```
This should install all the Python packages used in this project.

4. Start the Django dev server. Step into the project root (DigiSouq) and start the server.
```bash 
python manage.py runserver --settings=digisouq.settings.dev 
```
Your server should now be up and running on localhost:8000. You can access the Admin Site at `localhost:8000/admin`, while the REST API should be at `localhost:8000/api`.

### Frontend Dependencies 
The React app is inside the `market/static/digi-souq/` directory. So, let's go in there and install the Node packages we need using NPM.


```bash
cd market/static/digi-souq
```

Next, install all the Node packages for the frontend React app.

```bash
npm install 
```

You may or may not get some warnings. Don't worry, as long the server starts sucessfully, you can feel free to ignore them for now.

```bash
npm start
```
Your frontend (React-based) app should now be live and accessible on `localhost:3000`.

## Caveat Emptor 
* This project is made available "as-is" with no warranties or guaranties whatsoever.
* Don't "copy-and-paste" this project into an existing one without significantly modifying it.
* If you model your project after this one, please, consider adding more functionality and writing some tests
* Consider making this project more secure (using Web App security best practices) before adapting it for practical use.

## On Further Development

### The Backend: 
To improve the backend (Django) project, consider:

* Using [PostgreSQL](https://www.postgresql.org/) instead of SQLite as your database of choice.

* Using JWT for all-round authentication instead of DRF's TokenAuthentication implementation. See [DRF-SimpleJWT](https://github.com/davesque/django-rest-framework-simplejwt) for a viable option.

* Writing both backend and frontend functional and unit tests. For a detailed coverage of TDD in Python, see Harry Percival's ["Test-Driven Development with Python"](http://www.obeythetestinggoat.com/) book. (This book is more than just a coverage of TDD in Python. It's actually a tour of Web Development best practices and practical walkthroughs from your first line of code to settings up a CI/CD system. I **highly recommend** this book.)

### The Frontend: 
You can improve the React frontend app by:
* Using [Redux](https://react-redux.js.org/) as a state manager to handle all your data centrally instead of the component `state`.

* Improve the UI using [Material Design Lite](https://getmdl.io/) or [Reactstrap](https://reactstrap.github.io/) 

## Contact Me:
I am online (on Social Media) and on my own websites. Here's where and how to get in touch with me.

### Social Media:
I can be reached, connected with, be-friended or followed on:
* [LinkedIn](https://linkedin.com/in/muhammadjalloh)
* [Twitter](https://twitter.com/techbuktu)
* [GitHub](https://github.com/techbuktu)

### My Tech Space:
I have a few websites online, but most relevant here are:
* [TechBuktu](https://techbuktu.com) (I publish some web dev tutorials here every once in a while.)
* [Siratiq: Interactive Mapping Platform](https://siratiq.com) (This is a work-in-progress platform that lets you create, share and discover photos, blog posts, notes and videos parlayed on a personal map. Other features are forthcoming, God willing! :) )

### I am Looking for a Full Stack Role
If you are reading this, I am currently looking for a Software Development role that enables me to work with Python and/or JavaScript (on the backend) and React.js or Angular on the frontend. I prefer either a position local to Chicago, IL or remote. If you have something that fits what I am looking for, please, send me a message via LinkedIn **https://linkedin.com/in/muhammadjalloh** and we will take it from there! :) 