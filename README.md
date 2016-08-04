Project Requirements
====================

## Create an array of JS objects to hold the data for the quotes.
Each quote should have the following properties:
- [x] A `quote` property which contains a string: the text of the quote to display on the page.
- [x] A `source` property which contains a string identifying the creator of the quote.
- [x] An optional `citation` property which contains a string identifying the publication the quote appears in.
- [x] An optional `year` property which contains a number identifying the date of the quote.

## Create a function named `getRandomQuote` which:
- [x] selects a random quote object from the quotes array
- [x] returns the randomly selected quote objects

## Create a function names `printQuote` which follows these rules:
- [x] `printQuote` calls the `getRandomQuote` function and stores the returned quote object in a variable.
- [x] `printQuote` constructs a string using the different properties of the quote object using the following HTML template:

```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
```
- [x] `printQuote` doesn't add a `<span class="citation">` for a missing citation or a `<span class="year">` if the year property is missing.
- [x] `printQuote` displays the final HTML string to the page. You can use the following JS snippet to accomplish that: `document.getElementById('quote-box').innerHTML`

# Extra Credit

- [x] Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.
- [x] Randomly change the background color of the page, when the quote changes
- [x] Don't display a random quote more than once until ALL quotes from the array have been displayed.
- [x] Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)

# View Project
[Live Demo](https://somecallmejosh.github.io/random-quote-v2/) of this project for peer review.

# Reviewers comments

Well done, your code is free of syntax errors!

Great comments -- it's clear to me how these functions work just by reading your comments. Building off of above, when using a more esoteric or 'off label' approach like <<0 it's our responsibility to include a comment specific to that. If I choose to use nested ternaries as I like to, I will probably need to include additional comments to make sure anyone else reading can easily understand what is happening, even if they can't initially follow the code.

You have more than 5 quotes. Way to go the extra mile!

Goo work going above and beyond to include more data in each quote. Likewise, I'm going to offer up a couple suggestions that aren't within the scope of the project and that you might be aware of, but you clearly exceeded, so I'd like to try and be able to give you some actual feedback.

In a real world version of this project, I can see two alternative approaches to citation. Either only including the citation field if the quote has a specific source (a specific website, etc...), or include the citation field regardless, but create a sort of generic filter array filled with the generic citations (["the web", "internet", "a book", etc...] and then perform an if check against that array and only print the citation if it is not in that array.

Awesome work adding the tags field. Two suggestions (again outside the scope of the project):

First, in a real world project or use case, tags are less likely to be used for display and more likely to be used to help search/sort/summarize your data. Since a large portion of this project is about building out your printQuote function, it's actually good that you added another field to print. But, I wanted to point that out to support my second point, which is that keeping the data type for a field uniform makes life a lot easier.

In a (again, real world) scenario where you needed to use the tags for anything other than printing/displaying, you would need to write extra code to handle single strings and arrays, or more likely to check if it is a string and then convert a single string to an array and then do whatever you needed to do. Better to just have every tag field be an array.

Again, great work, I am just trying to go above and beyond as a reviewer since you went above and beyond on your project.

Excellent work. There are a few different approaches to hitting the 'exceeds expectations' mark here and I think that this one is my favorite.

It boils down to two approaches. The first and the one I see a lot is placing a 'printed' or 'displayed' etc... flag on the quote object and initializing it to false. Then setting it to true when randomly selected. Keeping count and when the display count === number of quotes, reset all flags to false and count to 0. The problem is that this requires randomly selecting an index until we hit a quote with .display === false. This introduces some performance unpredictability to our code. It's not always best to ONLY think in worst case scenarios when evaluating or comparing solutions, but we should always take it into consideration. And for this version of the solution, the worst case is a run time of theoretically Infinity - Number.MIN_VALUE. That case is extraordinarily unlikely, but becomes more likely the larger the dataset. If we have a few million quotes, it does become very likely that the later quotes in the set will take significantly longer to randomly select (possibly on the order of seconds). And that's not an ideal user experience.

With your approach you sacrifice a few cycles (<1ms) to ensure that each and every quote takes the same amount of time. As long as the quotes load quickly enough, it is much more important to the user experience that they load consistently the same speed than it is that most of them load imperceptibly faster.

The reason I said your version takes a little longer per quote is because splice is expensive (costs a relatively high number of cpu cycles). This is one of the few situations where I think splice is undoubtedly the best approach that I can think of. But, behind the scenes a LOT of work goes into every splice.

(Completely unrelated to the project -->) Same with String manipulation. This is why (counter intuitively) splitting a String into an array, reversing the array and then using join to turn it back into a String is actually faster than switching the first and last characters in a string until you get to the middle. Strings are meant to be immutable (unchangeable) so any time we change them a completely new String is actually created behind the scenes rather than the original String being altered.

Excellent job exceeding again. Some more above and beyond tips:

Great work randomly selecting a BG color and excellent job abstracting it into its own function rather than making it a part of printQuote. In a real world app, this does leave the chance that the BG and text colors will be similar enough to make the text difficult/impossible to read. A solution could be to include some kind of threshold to check if the color value is too similar. Something like [this](http://stackoverflow.com/questions/22692134/detect-similar-colours-from-hex-values) (I didn't actually try that or read it thoroughly, was just the first thing that came up on Google).

Also, I love concise, clever code. If it was up to me I would write infinitely nested ternaries without hesitation. But, in the real world, on a team, unless there is a performance benefit (significant to the project), it's best to write code that is descriptive and performant. Using bitwise operators to convert to an integer is not bad, but it isn't nearly as descriptive as Math.floor(num). Most people you work with will be able to read that code without skipping a beat, but you'd be surprised how many developers (especially web dev) in the field that would not know what you were doing with num<<0. Again, for the purposes of this project that's awesome and it demonstrates a solid knowledge of the code. I personally like to see that. But, in the real world, I have had to shift some of my personal coding preferences ({statement ? statement ? T/T action : T/F action : statement ? F/T action : F/F action} <-- I think that's efficient code. Most people hate it.) quite a bit to take into account the performance cost of other people having to step into my code and seamlessly understand it.

All that aside, I did some performance tests in chrome with console.time() and if anything Math.floor performs better (to the tune of around 10 ms faster over a billion iterations, aka pretty much exactly the same).

Last possible real world suggestion would be that we would want to restart our settimeout when someone clicks the button to avoid the possibility of someone clicking and the timeout hitting immediately after and they don't have time to read. This could be done with [clearTimeout](http://www.w3schools.com/js/js_timing.asp)

**Overall Comments**
Great work, Josh. You easily exceeded and I could tell you had a solid grasp of the concepts, so I tried to go out of my way to leave comments that were well beyond the scope of the project requirements so that you were still able to take something away from the review. But, as I said, I only did that because you clearly exceeded the expectations of the project. Keep it up.
