import React from 'react';

const Upload = () =>
{
  return (
    <section id="upload" class="row">
        <div class="col-4 quote">
            <h2>Life</h2>
            <h3>is a</h3>
            <h2>Journey</h2>
            <h3>we take</h3>
            <h2>Together.</h2>
        </div>
        <div class="col">
            <form class="card journal new-journal form-group">
                <h2>My New Journey:</h2>
                <label for="title">Title:</label>
                <input type="email" class="form-control" id="title" placeholder="My Journal"/>
                <label for="photo">Upload photos:</label>
                <input type="file" class="form-control-file" id="photo"/>
                <label for="desc">Description:</label>
                <textarea class="form-control" id="desc" placeholder="Tell your story here!" rows="5"></textarea>
                <button type="submit" class="btn btn-info col">Submit</button>
                <button type="clear" class="btn btn-info col">Clear</button>
            </form>
        </div>
    </section>
  )
};

export default Upload;