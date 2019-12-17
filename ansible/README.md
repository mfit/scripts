Collection of ansible playbooks
===============================

Preperation:

 - adapt the `hosts` file

Usage:

    # Install python
    $ ansible-playbook -i hosts install-python.yml

    # Install docker + docker-compose
    $ ansible-playbook -i hosts install-docker.yml

    # Deployment
    $ ansible-playbook -i hosts deploy.yml

    # UFW setup (uncomplicated firewall)
    $ ansible-playbook -i hosts ufw.yml

    # Shell tasks for some maintenance/setup tasks
    # for mysql databases in docker container
    $ ansible-playbook -i hosts ufw.yml


