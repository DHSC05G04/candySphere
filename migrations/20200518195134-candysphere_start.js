'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //await queryInterface.createDatabase('candySphere');

    /* Incluir tabela status */
    await queryInterface.createTable(
      'status',{
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        descricao: {
          type: Sequelize.STRING,
          unique:true,
          allowNull: false,
        }
      });

    /* Incluir tabela formas_pagamento */
    await queryInterface.createTable(
      'formas_pagamento',{
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        taxa: {
          type: Sequelize.DECIMAL,
          allowNull: false,
          default: 0.00
        },
        ativo: {
          type: Sequelize.BOOLEAN,
          default: true,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        },

      }
    );

    /* Incluir tabela tipos_itens */
    await queryInterface.createTable(
      'tipos_itens', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        },

      });

    /* Incluir tabela unidades */
    await queryInterface.createTable(
      'unidades', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        unidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        updated_at: {
          type:Sequelize.DATE,
          default: new Date(),
        },
        // Paranoid Mode
        deleted_at: {
          type:Sequelize.DATE,
          allowNull: true
        },

        });

    /* Incluir tabela unidades_por_tipo */
    await queryInterface.createTable(
      'unidades_por_tipo', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        tipos_itens_id:{
          type:Sequelize.INTEGER,
          alowNull: false,
          references: {
            model: 'Tipos_itens',
            key: 'id'
          },
        },
        unidades_id:{
          type:Sequelize.INTEGER,
          alowNull: false,
          references: {
            model: 'Unidades',
            key: 'id'
          },
        }
        });


    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      cpf: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      salario: {
        type: Sequelize.DECIMAL
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome_usuario: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      acesso: {
        type: Sequelize.INTEGER
      },
      funcionario_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'funcionarios',
          key: 'id'
        }
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('estocaveis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      tipo_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'tipos_itens',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'unidades',
          key: 'id'
        }
      },
      custo_unitario: {
        type: Sequelize.DECIMAL
      },
      validade: {
        type: Sequelize.DATE
      },
      vendavel: {
        type: Sequelize.BOOLEAN
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('receitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      nome: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      tempo_preparo: {
        type: Sequelize.INTEGER
      },
      rendimento: {
        type: Sequelize.INTEGER
      },
      foto: {
        type: Sequelize.STRING
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('ingredientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      estoque_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'estocaveis',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.DECIMAL
      },
      unidade_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'unidades',
          key: 'id'
        }
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'receitas',
          key: 'id'
        }
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('instrucoes_preparos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      instrucao: {
        type: Sequelize.STRING
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'receitas',
          key: 'id'
        }
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      estoque_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'estocaveis',
          key: 'id'
        }
      },
      receita_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'estocaveis',
          key: 'id'
        }
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      data_criacao: {
        allowNull: false,
        type: Sequelize.DATE
      },
      data_modificacao: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    
    /* Incluir tabela Terminais */

    /* Incluir tabela Caixa */

    /* Incluir tabela Pedidos */

    /* Incluir tabela Comandas */

    /* Incluir tabela Recebimentos */

    /* Incluir tabela Contas */

    /* Incluir tabela Pagamentos */

    /* Incluir tabela conta_movimento */

    return console.log('Banco de dados CandySphere criado corretamente!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropDatabase('candySphere');    
  }
};
