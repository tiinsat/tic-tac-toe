-- CreateTable
CREATE TABLE `conexao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario_a` INTEGER NOT NULL,
    `id_usuario_b` INTEGER NOT NULL,
    `data_solicitacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('criado', 'andamento', 'finalizado') NOT NULL DEFAULT 'criado',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partida_historico` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_partida` INTEGER NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `area_jogada` INTEGER NOT NULL,
    `peca_do_jogador` ENUM('o') NOT NULL,
    `data_solicitacao` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
