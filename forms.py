from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, IntegerField, validators, EmailField, SelectField


class LuckyForm(FlaskForm):
    name = StringField('Name:', [validators.DataRequired(
        message="This field is required.")])
    birth_year = IntegerField('Birth Year:', [validators.DataRequired(message="This field is required."), validators.NumberRange(
        min=1900, max=2000, message="Birth year must be between 1900 and 2000.")])
    email = EmailField('Email:', [validators.DataRequired(
        message="This field is required."), validators.Email(message="Invalid email address.")])
    color = color = SelectField('Color:', choices=[('red', 'Red'), ('green', 'Green'), ('orange', 'Orange'), (
        'blue', 'Blue')], validators=[validators.DataRequired(message="This field is required.")])
    submit = SubmitField('I Want To Feel Lucky!')


#   <div>Name: <input id="name"> <b id="name-err"></b> </div>
#   <div>Birth Year: <input id="year"> <b id="year-err"></b> </div>
#   <div>Email: <input id="email"> <b id="email-err"></b> </div>
#   <div>Color: <input id="color"> <b id="color-err"></b> </div>
#   <button>I Want To Feel Lucky!</button>
