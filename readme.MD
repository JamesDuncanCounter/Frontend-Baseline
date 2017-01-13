#Frontend Framework

This framework is using NPM, Grunt and Sass on bootstrap 4.

# Install pre-requisites

You will only need to follow the installation steps once.

* Configure GIT for bower to work behind the Euromoney firewall

	git config --global url."https://".insteadOf git://

	>  We use either https or ssh to clone from github regularly, rather than the git protocol, so this should have no side effects given that the firewall blocks the default protocol / port combination

* Install nodeJS on your machine
> (http://nodejs.org/download/)

* Install SASS on your machine (for command line)
> (http://sass-lang.com/install)

* Install grunt-cli and bower globally

	**npm install grunt-cli -g**

	**npm install bower -g**

	> Run in project root (this folder) as administrator / sudo

#Setup

	*npm install

	*grunt
