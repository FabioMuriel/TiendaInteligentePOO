using TiendaInteligenteBackend.Domain.Entities;
using TiendaInteligenteBackend.Domain.Interfaces;

namespace TiendaInteligenteBackend.Application.UsesCases;

public class UserUseCase : IUserUsesCases
{
    private readonly IUserRepository _userRepository;

    public UserUseCase(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public Task<UserEntity> CreateUserAsync(UserEntity user)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> UpdateUserAsync(UserEntity user)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> DeleteUserAsync(UserEntity user)
    {
        throw new NotImplementedException();
    }

    public Task<UserEntity> GetUserByIdAsync(Guid userId)
    {
        throw new NotImplementedException();
    }
}