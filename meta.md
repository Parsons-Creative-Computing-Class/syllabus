# Class information for teachers

This material under this GitHub organization is for a 5 session, 18 contact hour Advanced JavaScript continuing education class.  It consists of:

* [A repository for the syllabus](README.md)
* [A repository for the slides/examples](https://github.com/advanced-js/deck)
* [A repository of students](https://github.com/advanced-js/students)
* One repository per assignment (everything else listed under https://github.com/advanced-js)

## Materials

All class materials and assignments are in public repositories under a single organization, which has the added benefits of:

* Keeps everything easy to find
* Giving students experience with:
    * Interacting and contributing to open source
    * Getting comfortable with Git & GitHub
* Making it easy for others to watch changes, fork, create issues and pull requests against the class materials
* Setting up an expectation of trust with the students – see the [Statements on Plagiarism](https://github.com/advanced-js/syllabus#instructor) for more info

## Structure

The structure of the class relies heavily on GitHub features, so as a bonus it acts as a testbed for recommendations made as part of the [GitHub Education program](https://education.github.com).  For example:

* The [**syllabus is posted publicly**](https://education.github.com/guide#3-post-your-syllabus), where students can "watch" to be notified of changes, give feedback on class structure, or even propose additional resources.
* Assignments are **structured using the [Forks](https://education.github.com/guide/forks) strategy**.
    * **Pull requests are used to turn in assignments** and give feedback – see [the workflow](README.md#workflow) and [the guide](https://education.github.com/guide/forks#3-completing-assignments).
* A [Gruntfile](http://gruntjs.com) is included in each assignment repository to run **HTML Validation** through the [W3C Markup Validator](http://validator.w3.org/source/), **JavaScript linting** through [JSHint](http://www.jshint.com/about/), and in some cases, **unit tests** through [QUnit](http://qunitjs.com/).
* [Travis CI](http://docs.travis-ci.com) is set up to run the Grunt tasks, for every new or updated pull request, giving students **near-immediate feedback**.
* **[The slide deck](http://advanced-js.github.io/deck/) is a public webpage**, hosted using [GitHub Pages](https://pages.github.com).
* By [setting the default branch](https://help.github.com/articles/setting-the-default-branch) in each assignment repository to be `gh-pages`, **every student's fork/submission is then a live Pages site** that can be used for grading, so the files never need to be downloaded for grading.
* Students are added to teams by term (e.g. `summer-2014`), so that **[team mentions](https://github.com/blog/1121-introducing-team-mentions)** can be used to direct everyone's attention to important syllabus changes or important pieces of feedback.
    * As part of the first class, students submit pull requests to add themselves to the [students](https://github.com/advanced-js/students) repository.  This is partially to collect their usernames, and partially to tie their usernames to their real names.  [A script](https://github.com/advanced-js/students/blob/master/add_students.rb) is then run to automatically add them to the team for that term.

Basically the only thing that isn't done in the repositories or in class is giving the grades, which are done through  NYU's Classes [LMS](https://en.wikipedia.org/wiki/Learning_management_system) (built on [Sakai](https://sakaiproject.org/)).

## Engagement

This is a vocational class taught in a [major tech hub](https://en.wikipedia.org/wiki/Silicon_Alley), so I encourage the students to engage with the larger tech community.  Instead of having office hours specific to one class (with potentially low attendance), I started a [meetup](http://www.meetup.com/) called [Hacker Hours](http://hackerhours.org/) that offers free recurring programming help to *anyone*.  Students can then come and get help from me or any of the other mentors that attend, and ideally connect with other learners outside of the class.

## Sharing

The material is free to modify and distribute – if you end up using some of all of the material for your own class, training materials, etc., I would love to [hear from you](https://github.com/advanced-js/syllabus/issues/new)!

## Technical Specs

### PDF Generation

**Requires a pre-install of (wkhtmltopdf)[http://wkhtmltopdf.org/downloads.html].**
