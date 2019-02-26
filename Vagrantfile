# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = 'ubuntu/xenial64'
  config.vm.network "forwarded_port", guest: 22, host: 2222, protocol: "tcp", auto_correct: true
  config.vm.network "forwarded_port", guest: 22, host: 2222, protocol: "udp", auto_correct: true
  config.vm.network "private_network", ip: "192.168.100.100"
  config.ssh.forward_agent = true
  config.vm.provision "shell", path: "provision.sh"
  config.vm.provision "shell", inline: "sudo service nginx start", run: 'always'
  config.vm.boot_timeout = 60
  
  config.vm.provider "virtualbox" do |vb|
    vb.name = "mvc-starter"
	vb.memory = 1524
    #vb.customize [ "modifyvm", :id, "--uartmode1", "disconnected" ]
  end
end
