# Agreement framework

The scenario here is that Alice an Bob decide on an agreement framework whereby a sum of Lumens provided by Alice in an Escrow Account can be payed to Bob at a certain time, for a given time, called Unlock period. After this Unlock period is finished, the Recovery period starts where Alice can recover the funds she funded the Escrw with.

![Framework](./img/agreement-setup.png)

After some time... Unlock period starts, and the Proceed transaction can be submitted.

![Framework](./img/proceed.png)


Then starts the Recovery period where the Unlock transaction can't be valid anymore and where the Recovery transaction starts being valid

![Framework](./img/recovery.png)
