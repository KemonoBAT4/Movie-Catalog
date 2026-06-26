
from ._common import *
from . import BaseModel

class User(UserMixin, BaseModel):

    __tablename__ = "users"

    name            = db.Column(db.String(80) , nullable=False )
    surname         = db.Column(db.String(80) , nullable=False )
    username        = db.Column(db.String(80) , nullable=False, unique=True )
    email           = db.Column(db.String(120), nullable=False, unique=True )
    hashed_password = db.Column(db.LargeBinary, nullable=False )

    @classmethod
    def register(cls, username: str, email: str, name: str, surname: str, password: str) -> "User | tuple":
        """
        #### DESCRIPTION:
        Adds a new user with the provided password.

        #### PARAMETERS:
        - email (str): The email address of the user.
        - name (str): The name of the user.
        - surname (str): The surname of the user.
        - password (str): The password to set for the user.

        #### RETURN:
        - tuple: A tuple containing the status and message of the operation.
        """

        found_user: "User | None" = User.query.filter(
            or_(
                User.email    == email,
                User.username == username
            )
        ).first()


        if (found_user is not None):
            return User.Result(False, "User already exists").result()
        # #endif

        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

        user: "User" = User(
            name            = name,
            surname         = surname,
            username        = username,
            email           = email,
            hashed_password = hashed_password
        )
        user.save()

        return user
    #enddef

    @classmethod
    def login(cls, username: str, password: str) -> "User | tuple":

        user: "User | None" = User.query.filter(
            User.username == username
        ).first()


        if user is None:
            return cls.Result(False, "User not found").result()
        # #endif

        if not bcrypt.checkpw(password.encode("utf-8"), user.hashed_password):
            return cls.Result(False, "Invalid password").result()
        # #endif
        return user
    #enddef

    # NOTE: this returns the user identifier
    #       for the login and jwt
    def get_id(self):
        return str(self.uname)
    # #enddef

    def save(self) -> tuple:

        if (self.hashed_password is None):
            return self.Result(False, "Password is required").result()
        #endif

        return super().save()
    # #enddef save

    def to_dict(self) -> dict:
        """
        #### DESCRIPTION:
        Converts the model instance to a dictionary representation.

        #### PARAMETERS:
        - no parameters required

        #### RETURN:
        - dict: A dictionary representation of the model instance.
        """
        result: dict = { }

        for key, value in vars(self).items():
            if ((not callable(getattr(self, key))) and (not key.startswith('_')) and (key != "hashed_password")):
                result[key] = value
            # #endif
        # #endfor

        return result
    # #enddef to_dict
#endclass


#region    ------------------------------------ MOVIE MODELS ------------------------------------ #

class Genre(BaseModel):
    __tablename__ = "genre"

    # NOTE: the api genre id (for external data fetching)
    genre_api_id = db.Column(db.Integer    , nullable = False, unique = True)
    name         = db.Column(db.String(255), nullable = False)
# #endclass

class Movie(BaseModel):

    __tablename__ = "movie"

    # NOTE: the api movie id (for external data fetching)
    movie_api_id      = db.Column(db.Integer    , nullable = False, unique  = True  )
    adult             = db.Column(db.Boolean    , nullable = False, default = False ) # NOTE: adult content
    backdrop_path     = db.Column(db.Text       , nullable = True ) # NOTE: backdrop path

    genre_ids         = db.Column(db.Text       , nullable = True ) # NOTE: all genre ids, separated by comma
    original_language = db.Column(db.String(255), nullable = False) # NOTE: original language
    original_title    = db.Column(db.String(255), nullable = False) # NOTE: the original title

    overview          = db.Column(db.Text       , nullable = False)
    popularity        = db.Column(db.Float      , nullable = False) # NOTE: popularity
    poster_path       = db.Column(db.Text       , nullable = False) # NOTE: poster path string
    release_date      = db.Column(db.Date       , nullable = False) # NOTE: release date

    title             = db.Column(db.String(255), nullable = False) # NOTE: film title
    runtime           = db.Column(db.Integer    , nullable = False) # NOTE: film runtime (how long it takes to watch) (minutes)

    vote_average      = db.Column(db.Float      , nullable = True)
    personal_vote     = db.Column(db.Float      , nullable = True)
    vote_count        = db.Column(db.Integer    , nullable = True)

    local_video_path  = db.Column(db.Text       , nullable = True ) # NOTE: the local video path of the movie

    @property
    def genres(self):
        pass
    # #enddef genres

    def delete(self) -> tuple:

        comments: list = MovieComment.query.filter(MovieComment.film_id == self.id).all()

        for comment in comments:
            comment.delete()
        # #endfor

        return super().delete()
    # #enddef
# #endclass

class MovieComment(BaseModel):

    __tablename__ = "movie_comment"

    film_id = db.Column(db.Integer, db.ForeignKey("movie.id"), nullable = False)
    title   = db.Column(db.String(255), nullable = True)

    rating     = db.Column(db.Float, nullable = False)
    decription = db.Column(db.Text , nullable = True)

    @classmethod
    def new(
        cls,
        film_id     : int      ,
        rating      : float    ,
        title       : str  = "",
        description : str  = "",
    ) -> MovieComment:

        record = cls(film_id = film_id, rating = rating)

        if (title.strip() != ""):
            record.title = title
        #endif

        if (description.strip() != ""):
            record.description = description
        #endif

        return record
    # #enddef new
# #endclass MovieComment

#endregion ------------------------------------ MOVIE MODELS ------------------------------------ #



class TVShow(BaseModel):

    __tablename__ = "tv_show"

    pass
# #endclass

class TVShowComment(BaseModel):

    __tablename__ = "tv_show_comment"

    tv_show_id = db.Column(db.Integer, db.ForeignKey("movie.id"), nullable = False)
    title      = db.Column(db.String(255), nullable = True)

    rating     = db.Column(db.Float, nullable = False)
    decription = db.Column(db.Text , nullable = True)

    @classmethod
    def new(
        cls,
        film_id     : int      ,
        rating      : float    ,
        title       : str  = "",
        description : str  = "",
    ) -> MovieComment:

        record = cls(film_id = film_id, rating = rating)

        if (title.strip() != ""):
            record.title = title
        #endif

        if (description.strip() != ""):
            record.description = description
        #endif

        return record
    # #enddef new
# #endclass
