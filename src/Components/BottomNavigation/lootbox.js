import React from "react";

function Lootbox() {
    function slideImages() {
        var widthHalfContainer = $("body > .container").outerWidth() / 2;
        var parent = $(".roulette-item-wrapper");
        randomValue = 1;

        if (randomValue <= 3) randomValue = 75;

        spunAmount =
            $(".roulette-item-wrapper")
                .children()
                [randomValue - 1].getBoundingClientRect().left -
            626.8333129882812 +
            138 / 2;

        console.log(widthHalfContainer, randomValue, spunAmount);

        $(".roulette-item").css("transform", "translateX(-" + spunAmount + "px)");
}

    return (
        <div className="container">

            <div className="stopper"></div>
            <div className="roulette-content">
                <div className="roulette-item-wrapper">
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Steel_bar.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Steel Bar</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Mahogany_plank.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Mahogany Plank</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Abyssal_whip.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Abyssal Whip</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Mahogany_plank.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Mahogany Plank</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Mahogany_plank.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Mahogany Plank</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Death_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Death Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Abyssal_whip.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Abyssal Whip</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Berserker_ring.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Berserker Ring</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Berserker_ring.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Berserker Ring</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/classified.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Steel_bar.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Steel Bar</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/classified.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragonfire_shield.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Dragonfire Shield</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic+longbow.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Magic Longbow</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Mahogany_plank.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Mahogany Plank</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-
                           ">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Steel_bar.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Steel Bar</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Steel_bar.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Steel Bar</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Steel_bar.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Steel Bar</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Death_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Death Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Death_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Death Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Dragon Bones</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Death_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Death Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back">
                        </div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Shark.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Sharks</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Mahogany_plank.png"
                                                          alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">500 Mahogany Plank</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Berserker_ring.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Berserker Ring</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">3m OSRS Gold</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Death_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Death Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Berserker_ring.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Berserker Ring</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Abyssal_whip.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">Abyssal Whip</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png"
                                                       alt="itemback" className="roulette-item-back"></div>
                        <div className="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 className="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 className="roulette-subtitle-second"></h3>
                    </div>
                    <div className="roulette-item">
                        <div className="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" className="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Death_rune.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Death Rune</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">1000 Dragon Bones</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Steel_bar.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">2000 Steel Bar</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Berserker_ring.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">Berserker Ring</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Magic_logs.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">2000 Magic Logs</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Blood_rune.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Blood Rune</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Dragon_bones.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">1000 Dragon Bones</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Red_chinchompa.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">1000 Red Chinchompa</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Gold_ore.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">5000 Gold Ore</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/Abyssal_whip.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">Abyssal Whip</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">2m OSRS Gold</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                    <div class="roulette-item">
                        <div class="img-back"><img src="https://s3.amazonaws.com/files-images/animation/cards/rs/consumergrade.png" alt="itemback" class="roulette-item-back"></div>
                        <div class="img-wrapper"><img src="https://s3.amazonaws.com/files-images/Random/RS/osrs-gold.png" alt="GameItem"></div>
                        <h3 class="roulette-subtitle-first">3m OSRS Gold</h3>
                        <h3 class="roulette-subtitle-second"></h3>
                    </div>
                </div>
            </div>
            <div class="before-spin">

                <button class="btn open-case" onclick="slideImages();">
                    <h2>open case</h2>
                </button>

            </div>
    );
}

export default Lootbox;
