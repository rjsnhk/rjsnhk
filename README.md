- 👋 Hello World, I am Rajesh Nahak ...
- 👀 I’m interested in ethical hacking , cyber security , bug bounty ...
- 🌱 I’m currently learning python,c++,web devlopment ...
- 💞️ I’m looking to collaborate on technical projects ...
- 📫 How to reach me through - www.linkedin.com/in/rjsnhk
- 💖 Thank You ...
- uses: Platane/snk@v2
  with:
    # github user name to read the contribution graph from (*required*)
    # using action context var `github.repository_owner` or specified user
    github_user_name: ${{ github.repository_owner }}

    # list of files to generate.
    # one file per line. Each output can be customized with options as query string.
    #
    #  supported options:
    #  - palette:     A preset of color, one of [github, github-dark, github-light]
    #  - color_snake: Color of the snake
    #  - color_dots:  Coma separated list of dots color.
    #                 The first one is 0 contribution, then it goes from the low contribution to the highest.
    #                 Exactly 5 colors are expected.
