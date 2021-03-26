# README

*A gem, mimemagic, had a licensing issue and needed to yank all of its old (illegal) versions and relicense.*
*If you aren't able to bundle install due to this reason, try these steps*
* - brew install shared-mime-info
* - bundle update nokogiri marcel mimemagic

To run the project - 

1. Clone this repo
2. git checkout master
3. bundle install
4. rails db:create db:migrate db:seed
5. in front end diretory - cd frontend && npm install
6. one terminal run cmd in repo directory - rails s 
7. another terminal run cmd in frontend directory - npm start
8. to run backend tests run cmd in repo directory - bundle exec rspec
9. to run frontend tests run cmd in frontend directory - npm test
