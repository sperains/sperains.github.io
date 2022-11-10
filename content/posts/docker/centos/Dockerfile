FROM centos

RUN dnf install zsh git -y 

RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

WORKDIR /root/.oh-my-zsh/custom/plugins

RUN git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
RUN git clone https://github.com/zsh-users/zsh-autosuggestions

WORKDIR /root

RUN sed -i "s/plugins=(git)/plugins=(\nzsh-syntax-highlighting\nzsh-autosuggestions\ngit\n)/g" .zshrc