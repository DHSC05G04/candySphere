'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //await queryInterface.createDatabase('candySphere');

    /* Incluir tabela status */

    /* Incluir tabela formas_pagamento */

    /* Incluir tabela tipos_itens */
    await queryInterface.createTable('tipos_itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      tipo: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela unidades */
    await queryInterface.createTable('unidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      unidade: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela unidades_por_tipo */

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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
    
    /* Incluir tabela Terminais */
    await queryInterface.createTable('terminais', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      descricao: Sequelize.STRING,

      pedido_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'pedidos'
          },
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela Caixa */
    await queryInterface.createTable('caixas', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      hora_abertura: Sequelize.DATE,
      hora_fechamento: Sequelize.DATE,
      terminal_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'terminais'
          },
          key:'id'
        }
      },
      usuario_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'usuarios'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela Pedidos */
    await queryInterface.createTable('pedidos', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      entrada: Sequelize.DATE,
      entrega: Sequelize.DATE,
      entrega: Sequelize.DATE,
      total: Sequelize.DECIMAL,
      sinal: Sequelize.DECIMAL,
      obervacao: Sequelize.STRING,
      
      status_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'status'
          },
          key:'id'
        }
      },
      caixa_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'caixas'
          },
          key:'id'
        }
      },
      cliente_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'clientes'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela Comandas */
    await queryInterface.createTable('comandas', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      nota_fiscal: Sequelize.STRING,
      
      pedido_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'pedidos'
          },
          key:'id'
        }
      },
      produto_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'produtos'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela Recebimentos */
    await queryInterface.createTable('recebimentos', {
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: Sequelize.DECIMAL,
      aprovado: Sequelize.BINARY,
      
      pedido_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'pedidos'
          },
          key:'id'
        }
      },
      caixa_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'caixas'
          },
          key:'id'
        }
      },
      forma_pagamento_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'forma_pagamentos'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }

    });

    /* Incluir tabela Contas */
    await queryInterface.createTable('contas', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: Sequelize.DECIMAL,
      aprovado: Sequelize.BINARY,
      usuarios_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela Pagamentos */
    queryInterface.createTable('pagamentos', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      data_pgto: Sequelize.DATE,
      valor: Sequelize.DECIMAL,
      obervacao: Sequelize.STRING,
      
      status_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'status'
          },
          key:'id'
        }
      },
      conta_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'contas'
          },
          key:'id'
        }
      },
      formas_pagamento_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'formas_pagamentos'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    /* Incluir tabela conta_movimento */
    await queryInterface.createTable('conta_movimentos', { 
      id:{
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      data: Sequelize.DATE,
      saldo: Sequelize.DECIMAL,
      obervacao: Sequelize.STRING,
      
      recebimentos_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'recebimentos'
          },
          key:'id'
        }
      },
      pagamento_id:{
        type:Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'pagamentos'
          },
          key:'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    return console.log('Banco de dados CandySphere criado corretamente!')

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropDatabase('candySphere');    
  }
};
