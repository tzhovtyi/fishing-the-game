# FISHING THE GAME 

В данной игре про рыбалку игроку предстоит играть за рыбу. 

Играть можно по ссылке:
https://fishing-the-game.web.app/
или
https://fishing-the-game.firebaseapp.com/

### Как играть 
Управление рыбой осуществляется мышкой. Вам необходимо ловить падающую в воду кукурузу, чтобы набирать очки. Главная и единственная опасность игры - рыбак. Попав на его крючок, Вы проигрываете.
По мере набора очков, Ваша рыба эволюционирует. 50 очков считаются победой в игре, после чего можно продолжить играть с любой рыбой на выбор. Закончив игру, Вы можете записать свой счет на доску почета, он будет виден всем другим игрокам. 

### О создании
Все текстуры в игре были вручную нарисованы акварелью на бумаге.
Игра написана на ванильном js (+HTML, CSS) с помощью canvas. Все игровые элементы и их поведение реализовано с помощью классов. К игре подключена Firebase Realtime Database для хранения счета игроков и отзывов. 
Поскольку canvas подстраивается под характеристики монтира и рендерит кадры быстрее на мониторах с бóльшим Hz, было добавлено вычисление частоты обновления кадров, чтобы игра проходила на равных условиях вне зависимости от характеристик устройства. 
Текстуры игры имеют относительно большой размер, в связи с чем был добавлен экран загрузки; в среднем, загрузка может занимать 1-2 минуты. 
Я взял на себя смелость и использовал свое лицо для текстуры рыбака. 


## Eng:

In this fishing game, the player will have to play for the fish.

You can play by following the link:
https://fishing-the-game.web.app/
or
https://fishing-the-game.firebaseapp.com/


## How to play
The fish is controlled with the mouse. You need to catch corn falling into the water to score points. The main and only danger of the game is the fisherman. Once on his hook, you lose.
As you gain points, your fish evolves. 50 points are considered a victory in the game, after which you can continue playing with any fish of your choice. After finishing the game, you can save your score on the leaderboard, all the other players will be able to see it.

## About creation
All textures in the game were hand-drawn in watercolor on paper.
The game is written in vanilla js (+HTML, CSS) using canvas. The game elements and their behavior are implemented using ES6 classes. Firebase Realtime Database is connected to the game to store players' scores and reviews.
Since canvas adapts to the characteristics of the display and renders frames faster on monitors with a higher Hz, the calculation of the frame refresh rate was added so that the game is played on equal terms regardless of the characteristics of the device.
The textures of the game have a relatively large size, therefore a loading screen has been added; on average, loading can take 1-2 minutes.
I took the liberty and used my face for the texture of a fisherman.

