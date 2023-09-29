from flask import Flask, Response, render_template, jsonify, request
from forms import LuckyForm
from random import randint
from requests import get

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'


@app.route('/', methods=['GET', 'POST'])
def index():
    form = LuckyForm()
    if form.validate_on_submit():
        # Handle form submission here
        num = randint(1, 300)

        return jsonify({"date": {"date": form.birth_year.data, "fact": get(f'http://numbersapi.com/{form.birth_year.data}/year').text},
                        "num": {"num": num, "fact": get(f'http://numbersapi.com/{num}/trivia').text}})
    elif request.method == "POST":
        print(form.errors)
        return jsonify(form.errors), 400
    return render_template('index.html', form=form)


if __name__ == "__main__":
    app.run(debug=True)
