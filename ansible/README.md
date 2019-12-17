Collection of ansible playbooks
===============================

Official ansible documentation: https://docs.ansible.com/ansible/latest/index.html

Preparation:

 - adapt the `hosts` file, setting host-handle, host (SSHCONFIG_HOST_NAME), and username

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


