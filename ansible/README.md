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


