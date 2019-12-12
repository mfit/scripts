# Scripts + Starters

Collecetion of scripts and project starter / project configurations.


## Letsencrypt

Get a letsencrypt certificate with a docker image

    sudo docker run -it --rm --name certbot\
                -v "/etc/letsencrypt:/etc/letsencrypt"\
                -v "/var/lib/letsencrypt:/var/lib/letsencrypt"\
                -p 80:80 -p 443:443\
                certbot/certbot certonly\
                --standalone -d YOUR_DOMAIN
